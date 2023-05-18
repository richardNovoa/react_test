document.querySelector('video').playbackRate = 0.7;
import {
	SplittedText,
	ScrollObserver,
	easings
} from 'https://cdn.skypack.dev/oneloop.js@4.1.1';

const scrollObserver = new ScrollObserver();

// ----
// hero animation
// ----
scrollObserver.observe('.hero', {
	children: 'h1, img',
	onVisible: function (scrollInfos, percentRTW, percentRTE) {
		// title
		this.children[0].style.transform = 'translateY(' + percentRTE * 72 + 'vh)';
		this.children[0].style.opacity = 1 - percentRTE;
		// img
		this.children[1].style.transform = 'translateY(' + percentRTE * 15 + 'vh)';
		this.children[2].style.transform = 'translateY(' + percentRTE * -10 + 'vh)';
	}
});

// ----
// figure animation
// ----
scrollObserver.observe('figure', {
	children: 'img',
	onVisible: function (scrollInfos, percentRTW, percentRTE) {
		const p = easings.easeInCubic(percentRTW) * -19.53;
		const s = 1.5 - Math.min(easings.easeOutCubic(percentRTW * 2) / 2, 0.5);
		this.children[0].style.transform =
			'translateY(' + p + '%) scale(' + s + ')';
	}
});

// ----
// content paragraph & push
// ----
scrollObserver.observe('.content__text p, .push', {
	onVisible: function (scrollInfos, percentRTW, percentRTE) {
		const el = this.element,
			isVisible = el.classList.contains('is-visible');

		if (!isVisible && percentRTW > 0.25) {
			el.classList.add('is-visible');
		} else if (isVisible && percentRTW === 0) {
			el.classList.remove('is-visible');
		}
	}
});

// ----
// content title
// ----
function initTitle(title) {
	const splittedTitle = new SplittedText(title, {
		byLine: true,
		lineWrapper: function (line) {
			return (
				'<span class="st-line"><span class="st-line-inner">' +
				line +
				'</span></span>'
			);
		}
	});

	scrollObserver.observe(title, {
		onVisible: function (scrollInfos, percentRTW, percentRTE) {
			const isVisible = title.classList.contains('is-visible');

			if (!isVisible && percentRTW > 0.2) {
				title.classList.add('is-visible');
			} else if (isVisible && percentRTW === 0) {
				title.classList.remove('is-visible');
			}
		}
	});
}

document.fonts.ready.then(function () {
	document.querySelectorAll('.content__text h2').forEach(initTitle);
});

$.scrollify({
	section: '.scrollify',
	scrollSpeed: 300,
	standardScrollElements: '.normal-scroll-item'
});
