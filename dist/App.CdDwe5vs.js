import {
	d as e,
	r as s,
	w as n,
	a,
	b as c,
	F as i,
	e as d,
	u as o,
	f as r,
	t,
	o as h,
	g as l,
	v as u,
	h as m,
} from './243eee37.CXLjeeqT.js'
const p = [
		{
			id: 1,
			name: 'Bộ phận 1',
			users: [
				{ name: 'Nhỏ Một', id: 1 },
				{ name: 'Nhỏ Hai', id: 2 },
				{ name: 'Nhỏ Ba', id: 3 },
			],
		},
		{
			id: 2,
			name: 'Bộ phận 2',
			users: [
				{ name: 'Nhỏ Bốn', id: 4 },
				{ name: 'Nhỏ Năm', id: 5 },
				{ name: 'Nhỏ Sáu', id: 6 },
			],
		},
		{
			id: 3,
			name: 'Bộ phận 3',
			users: [
				{ name: 'Nhỏ Bảy', id: 7 },
				{ name: 'Nhỏ Tám', id: 8 },
				{ name: 'Nhỏ Chín', id: 9 },
			],
		},
	],
	k = ['onClick'],
	N = ['id', 'onUpdate:modelValue'],
	f = { key: 0, class: 'flex gap-16 select-none' },
	S = ['for'],
	g = ['id', 'onUpdate:modelValue'],
	y = e({
		__name: 'App',
		setup(e) {
			const y = p,
				b = (() => {
					const e = JSON.stringify(y)
					return JSON.parse(e).map((e) => {
						const s = e.users.map((e) => ({ ...e, checked: !1 }))
						return { id: e.id, name: e.name, checked: !1, isShow: !0, users: s }
					})
				})()
			let J = JSON.parse(JSON.stringify(b))
			const O = s(b),
				w = s({ department: [], user: [] })
			n(O, () => {
				const e = [],
					s = []
				O.forEach((n, a) => {
					const c = []
					n.checked === J[a].checked
						? (n.users.forEach((e) => {
								e.checked && c.push(e.id)
						  }),
						  c.length === n.users.length
								? ((n.checked = !0), e.push(n.id))
								: ((n.checked = !1), s.push(...c)))
						: n.users.forEach((e) => {
								e.checked = n.checked
						  })
				}),
					(w.department = e),
					(w.user = s),
					(J = JSON.parse(JSON.stringify(b)))
			})
			const x = () => {}
			return (e, s) => (
				h(),
				a('div', null, [
					c(
						'form',
						{ onSubmit: x },
						[
							(h(!0),
							a(
								i,
								null,
								d(
									o(O),
									(e) => (
										h(),
										a('div', { key: e.id, class: 'mb-16' }, [
											c(
												'div',
												{
													class: 'flex gap-8 mb-8 cursor-pointer select-none',
													onClick: (s) => (e.isShow = !e.isShow),
												},
												[
													l(
														c(
															'input',
															{
																id: e.name,
																type: 'checkbox',
																'onUpdate:modelValue': (s) => (e.checked = s),
																onClick:
																	s[0] || (s[0] = (e) => e.stopPropagation()),
															},
															null,
															8,
															N
														),
														[[u, e.checked]]
													),
													c(
														'span',
														null,
														t(e.name) + ' ' + t(e.isShow ? '-' : '+'),
														1
													),
												],
												8,
												k
											),
											e.isShow
												? (h(),
												  a('div', f, [
														(h(!0),
														a(
															i,
															null,
															d(
																e.users,
																(e) => (
																	h(),
																	a(
																		'label',
																		{
																			key: e.id,
																			for: e.name,
																			class: 'inline-flex gap-8 cursor-pointer',
																		},
																		[
																			l(
																				c(
																					'input',
																					{
																						id: e.name,
																						type: 'checkbox',
																						'onUpdate:modelValue': (s) =>
																							(e.checked = s),
																					},
																					null,
																					8,
																					g
																				),
																				[[u, e.checked]]
																			),
																			c('span', null, t(e.name), 1),
																		],
																		8,
																		S
																	)
																)
															),
															128
														)),
												  ]))
												: m('', !0),
										])
									)
								),
								128
							)),
						],
						32
					),
					r(' ' + t(JSON.stringify(o(w))), 1),
				])
			)
		},
	})
export { y as default }
