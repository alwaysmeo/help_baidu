<script setup>
	import { onMounted, useTemplateRef, nextTick } from 'vue'
	import { useRoute } from 'vue-router'

	const route = useRoute()
	const emits = defineEmits(['end'])
	const props = defineProps({
		inputElement: { type: HTMLElement, required: true },
		buttonElement: { type: HTMLElement, required: true },
	})

	const pointerRef = useTemplateRef('pointer')
	let lastPos = { x: 0, y: 0 }
	let animationStep = 0

	function moveTo(element, isFirst = false) {
		if (!pointerRef.value || !element) return

		const rect = element.getBoundingClientRect()
		const target = {
			x: rect.left + 40,
			y: rect.top + rect.height / 2 + 10,
		}

		pointerRef.value.style.setProperty('--start-x', `${isFirst ? 0 : lastPos.x}px`)
		pointerRef.value.style.setProperty('--start-y', `${isFirst ? 0 : lastPos.y}px`)
		pointerRef.value.style.setProperty('--target-x', `${target.x}px`)
		pointerRef.value.style.setProperty('--target-y', `${target.y}px`)

		pointerRef.value.classList.remove('animate')
		void pointerRef.value.offsetWidth
		pointerRef.value.classList.add('animate')

		lastPos = target
	}

	onMounted(() => {
		nextTick(() => {
			const handleAnimationEnd = () => {
				animationStep++
				emits('end', animationStep)
				switch (animationStep) {
					case 1:
						setTimeout(() => moveTo(props.buttonElement), 600)
						break
					case 2:
						pointerRef.value.removeEventListener('animationend', handleAnimationEnd)
						break
					default:
						break
				}
			}
			pointerRef.value.addEventListener('animationend', handleAnimationEnd)
			moveTo(props.inputElement, true)
		})
	})
</script>

<template>
	<img ref="pointer" class="pointer" src="@assets/svg/pointer.svg" alt="pointer" />
</template>

<style scoped lang="scss">
	.pointer {
		position: fixed;
		top: 0;
		left: 0;
		width: 18px;
		z-index: 1000;
		pointer-events: none;
		transform: translate(0, 0);
	}

	.animate {
		animation: moveToTarget 2s cubic-bezier(0.3, 1.2, 0.7, 1) forwards;
	}

	@keyframes moveToTarget {
		from {
			transform: translate(var(--start-x), var(--start-y));
		}
		to {
			transform: translate(var(--target-x), var(--target-y));
		}
	}
</style>
