const __vite__mapDeps = (
	i,
	m = __vite__mapDeps,
	d = m.f || (m.f = ['App.CdDwe5vs.js', '243eee37.CXLjeeqT.js'])
) => i.map((i) => d[i])
import { c as e } from './243eee37.CXLjeeqT.js'
!(function () {
	const e = document.createElement('link').relList
	if (!(e && e.supports && e.supports('modulepreload'))) {
		for (const e of document.querySelectorAll('link[rel="modulepreload"]')) t(e)
		new MutationObserver((e) => {
			for (const r of e)
				if ('childList' === r.type)
					for (const e of r.addedNodes)
						'LINK' === e.tagName && 'modulepreload' === e.rel && t(e)
		}).observe(document, { childList: !0, subtree: !0 })
	}
	function t(e) {
		if (e.ep) return
		e.ep = !0
		const t = (function (e) {
			const t = {}
			return (
				e.integrity && (t.integrity = e.integrity),
				e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
				'use-credentials' === e.crossOrigin
					? (t.credentials = 'include')
					: 'anonymous' === e.crossOrigin
					? (t.credentials = 'omit')
					: (t.credentials = 'same-origin'),
				t
			)
		})(e)
		fetch(e.href, t)
	}
})()
const t = {}
;(() => {
	const r = () => {
		;(function (e, r) {
			let n = Promise.resolve()
			if (r && r.length > 0) {
				document.getElementsByTagName('link')
				const e = document.querySelector('meta[property=csp-nonce]'),
					o =
						(null == e ? void 0 : e.nonce) ||
						(null == e ? void 0 : e.getAttribute('nonce'))
				n = Promise.all(
					r.map((e) => {
						if (
							(e = (function (e) {
								return '/' + e
							})(e)) in t
						)
							return
						t[e] = !0
						const r = e.endsWith('.css'),
							n = r ? '[rel="stylesheet"]' : ''
						if (document.querySelector(`link[href="${e}"]${n}`)) return
						const i = document.createElement('link')
						return (
							(i.rel = r ? 'stylesheet' : 'modulepreload'),
							r || ((i.as = 'script'), (i.crossOrigin = '')),
							(i.href = e),
							o && i.setAttribute('nonce', o),
							document.head.appendChild(i),
							r
								? new Promise((t, r) => {
										i.addEventListener('load', t),
											i.addEventListener('error', () =>
												r(new Error(`Unable to preload CSS for ${e}`))
											)
								  })
								: void 0
						)
					})
				)
			}
			return n
				.then(() => e())
				.catch((e) => {
					const t = new Event('vite:preloadError', { cancelable: !0 })
					if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented))
						throw e
				})
		})(() => import('./App.CdDwe5vs.js'), __vite__mapDeps([0, 1])).then(
			function (t) {
				t && t.default && e(t.default).mount('#root')
			}
		)
	}
	return {
		init() {
			r()
		},
	}
})().init()
