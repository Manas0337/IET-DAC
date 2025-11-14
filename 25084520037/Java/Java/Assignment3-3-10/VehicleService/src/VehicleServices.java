import java.util.Date;
public class VehicleServices {
	private int vid;
	private String ownername;
	private String vtype;
	private Date pdate;
	
	public VehicleServices()
	{
		vid=0;
		ownername=null;
		vtype=null;
	    pdate=null;
	}
	public VehicleServices(int vid, String ownername, String vtype, Date pdate) {
		
		this.vid = vid;
		this.ownername = ownername;
		this.vtype = vtype;
		this.pdate = pdate;
	}
	public int getVid() {
		return vid;
	}

	public void setVid(int vid) {
		this.vid = vid;
	}

	public String getOwnername() {
		return ownername;
	}

	public void setOwnername(String ownername) {
		this.ownername = ownername;
	}

	public String getVtype() {
		return vtype;
	}

	public void setVtype(String vtype) {
		this.vtype = vtype;
	}
	public Date getPdate() {
		return pdate;
	}

	public void setPdate(Date pdate) {
		this.pdate = pdate;
	}

	public static void main(String[] args) {
		
	}
	public String toString() {
		return "VehicleServices [vid=" + vid + ", ownername=" + ownername + ", vtype=" + vtype + ", pdate=" + pdate
				+ "]";
	}
}
