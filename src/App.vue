<script setup lang="ts">
	import { IResult, IStaffListFormatted } from 'types'
	import { INIT_STAFF_INFO } from './constants'
	const data = INIT_STAFF_INFO
	const dataFormatted = (() => {
		// deep cloned - to ignore mutate key value
		const dataCloned = JSON.stringify(data)
		const tmpDataFormatted = JSON.parse(dataCloned).map((item) => {
			const tmpUsersFormatted: IStaffListFormatted = item.users.map((user) => {
				return {
					...user,
					checked: false,
				}
			})

			return {
				id: item.id,
				name: item.name,
				checked: false,
				isShow: true,
				users: tmpUsersFormatted,
			}
		})

		return tmpDataFormatted
	})()
	let dataFormattedDraft = JSON.parse(JSON.stringify(dataFormatted))

	const dataFormattedState = reactive(dataFormatted)
	const result = reactive<IResult>({
		department: [],
		user: [],
	})

	watch(dataFormattedState, () => {
		const tmpDepartmentChecked: IResult['department'] = []
		const tmpUserChecked: IResult['user'] = []

		dataFormattedState.forEach((item, index) => {
			const tmpUserCheckedInEachDepartments: IResult['user'] = []

			if (item.checked !== dataFormattedDraft[index].checked) {
				item.users.forEach((user) => {
					user.checked = item.checked
				})

				return
			}

			item.users.forEach((user) => {
				if (user.checked) {
					tmpUserCheckedInEachDepartments.push(user.id)
				}
			})

			if (tmpUserCheckedInEachDepartments.length === item.users.length) {
				item.checked = true
				tmpDepartmentChecked.push(item.id)
			} else {
				item.checked = false
				tmpUserChecked.push(...tmpUserCheckedInEachDepartments)
			}
		})

		result.department = tmpDepartmentChecked
		result.user = tmpUserChecked
		dataFormattedDraft = JSON.parse(JSON.stringify(dataFormatted))
	})

	const onSubmit = () => {
		console.log(result)
	} // onSubmit
</script>

<template>
	<div>
		<form @submit="onSubmit">
			<div v-for="staff in dataFormattedState" :key="staff.id" class="mb-16">
				<div
					class="flex gap-8 mb-8 cursor-pointer select-none"
					@click="staff.isShow = !staff.isShow"
				>
					<input
						:id="staff.name"
						type="checkbox"
						style="transform: scale(1.5)"
						v-model="staff.checked"
						@click="($event) => $event.stopPropagation()"
					/>
					<span>{{ staff.name }} {{ staff.isShow ? '-' : '+' }}</span>
				</div>
				<div class="flex gap-16 select-none" v-if="staff.isShow">
					<label
						v-for="user in staff.users"
						:key="user.id"
						:for="user.name"
						class="inline-flex gap-8 cursor-pointer"
					>
						<input
							:id="user.name"
							type="checkbox"
							style="transform: scale(1.5)"
							v-model="user.checked"
						/>
						<span>{{ user.name }}</span>
					</label>
				</div>
			</div>
		</form>

		{{ JSON.stringify(result) }}
	</div>
</template>
