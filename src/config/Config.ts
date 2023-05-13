interface config {
	searchEngine: number;
}
const IconFontURL = "//at.alicdn.com/t/c/font_3627162_abh6jt8b3s9.js";
// 默认设置
const defaultConfig: config = {
	searchEngine: 1
};
// 选择的搜索引擎
const getSearchEngine = () => {
	if (localStorage.getItem("searchEngine")) {
		return localStorage.getItem("searchEngine");
	}
	return defaultConfig.searchEngine;
};
const setSearchEngine = (value) => {
	localStorage.setItem("searchEngine", value);
};

export default {
	IconFontURL,
	getSearchEngine,
	setSearchEngine
};
