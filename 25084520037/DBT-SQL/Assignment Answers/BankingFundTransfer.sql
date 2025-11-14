CREATE OR REPLACE PROCEDURE transfer_funds (
    p_from_acc IN NUMBER,
    p_to_acc   IN NUMBER,
    p_amount   IN NUMBER
) AS
    v_balance NUMBER;
BEGIN
    -- Check sender balance
    SELECT balance INTO v_balance
    FROM accounts
    WHERE acc_no = p_from_acc
    FOR UPDATE;  -- lock row

    IF v_balance < p_amount THEN
        RAISE_APPLICATION_ERROR(-20001, 'Insufficient funds');
    END IF;

    -- Deduct from sender
    UPDATE accounts
    SET balance = balance - p_amount
    WHERE acc_no = p_from_acc;

    -- Add to receiver
    UPDATE accounts
    SET balance = balance + p_amount
    WHERE acc_no = p_to_acc;

    -- Insert transaction log
    INSERT INTO transaction_history (from_acc, to_acc, amount)
    VALUES (p_from_acc, p_to_acc, p_amount);

    COMMIT;
EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
        RAISE;
END;
/
