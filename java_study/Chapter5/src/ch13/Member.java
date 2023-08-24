package ch13;

import java.util.Comparator;

public class Member implements Comparator<Member>{

	private int memberId;	// ȸ�� ���̵�
	private String memberName;	// ȸ�� �̸�
	
	public Member () {}
	
	public Member(int memberId, String memberName) {	// ������
		this.memberId = memberId;
		this.memberName = memberName;
	}
	
	public int getMemberId() {
		return memberId;
	}
	public void setMemberId(int memberId) {
		this.memberId = memberId;
	}
	public String getMemberName() {
		return memberName;
	}
	public void setMemberName(String memberName) {
		this.memberName = memberName;
	}
	
	@Override
	public int hashCode() {
		return memberId;
	}

	@Override
	public boolean equals(Object obj) {
		if(obj instanceof Member) {
			Member member = (Member)obj;
			if(this.memberId == member.memberId) {
				return true;
			}else {
				return false;
			}
		}
		return false;
	}

	@Override	// toString �޼ҵ� �������̵�
	public String toString() {
		return memberName + " ȸ������ ���̵�� " + memberId + "�Դϴ�.";
	}

//	@Override
//	public int compareTo(Member member) {
//
//		return(this.memberId - member.memberId);
//	}

	@Override
	public int compare(Member member1, Member member2) {
		return (member1.memberId - member2.memberId);
	}
}