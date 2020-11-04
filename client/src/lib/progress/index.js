


class Progress {


	static insertProgress() {

		const search = () => document.body.querySelector("#progress");

		const find = search();

		if (find) return find;

		document.body.insertAdjacentHTML("afterbegin", `
			<div class="progress" id="progress">

			</div>
		`);

		return search();

	}

	static progress(part, bar) {

		bar.classList[part === 1 ? "add" : "remove"]("finished");
		bar.style.setProperty("transform", `scaleX(${part})`);

	}

	static go(pro = 0) {

		const progressBar = this.insertProgress();

		this.progress(pro, progressBar);

	}

}


export default Progress;
