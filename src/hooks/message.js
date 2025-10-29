import { render, h, Transition, ref } from 'vue'
import IconPrompt from '@assets/svg/prompt.svg'

const createMessage = (type, options) => {
	let { content = '', duration = 1500 } = typeof options === 'string' ? { content: options } : options || {}

	let container = document.getElementById('global-container')
	if (!container) {
		container = document.createElement('div')
		container.id = 'global-container'
		document.body.appendChild(container)
	}

	const isVisible = ref(true)
	const close = () => {
		if (isVisible.value) {
			isVisible.value = false
		}
	}

	const App = {
		render() {
			return h('div', { class: 'message-container' }, [
				h(
					Transition,
					{
						name: 'fade-transform',
						appear: true,
						onAfterLeave: () => {
							render(null, container)
							if (document.body.contains(container)) {
								document.body.removeChild(container)
							}
						},
					},
					{
						default: () =>
							isVisible.value &&
							h('div', { class: `message-${type}-container` }, [
								h('div', null, [h('img', { src: IconPrompt }), h('p', null, content)]),
							]),
					}
				),
			])
		},
	}

	render(h(App), container)
	setTimeout(close, duration)
}

const Message = {
	success: (options) => createMessage('success', options),
	warning: (options) => createMessage('warning', options),
	error: (options) => createMessage('error', options),
}

export { Message }
