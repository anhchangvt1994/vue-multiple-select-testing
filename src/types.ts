interface IStaffInfo {
	id: number
	name: string
	users: { id: number; name: string }[]
}

interface IStaffInfoFormatted {
	id: number
	name: string
	checked: boolean
	isShow: boolean
	users: { id: number; name: string; checked: boolean }[]
}

export type IResult = {
	department: number[]
	user: number[]
}
export type IStaffList = IStaffInfo[]
export type IStaffListFormatted = IStaffInfoFormatted[]
