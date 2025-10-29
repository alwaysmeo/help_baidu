import { render, h, Transition, ref } from 'vue'

const Modal = {
	confirm: (options) => {
		const { title = '提示', content = '', confirmText = '确认', cancelText = '取消', onConfirm, onCancel } = options

		let container = document.getElementById('global-container')
		if (!container) {
			container = document.createElement('div')
			container.id = 'global-container'
			document.body.appendChild(container)
		}
		const isVisible = ref(true)
		const close = () => {
			if (!isVisible.value) return
			isVisible.value = false
		}
		const handleConfirm = async () => {
			if (onConfirm) await onConfirm()
			close()
		}
		const handleCancel = () => {
			if (onCancel) onCancel()
			close()
		}

		const App = {
			render() {
				return h('div', { class: 'mask-container' }, [
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
							default: () => {
								if (!isVisible.value) return null
								return h('div', { class: 'modal-confirm-container' }, [
									h('div', { class: 'modal-confirm-header-container' }, [h('div', {}, title)]),
									h('div', { class: 'modal-confirm-main-container' }, [h('div', {}, content)]),
									h('div', { class: 'modal-confirm-footer-container' }, [
										h('button', { onClick: handleCancel }, cancelText),
										h('p', { class: 'modal-confirm-footer-line' }),
										h('button', { onClick: handleConfirm }, confirmText),
									]),
								])
							},
						}
					),
				])
			},
		}

		render(h(App), container)
	},
}

export { Modal }
