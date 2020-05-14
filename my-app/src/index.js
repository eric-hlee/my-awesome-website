import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { IntlProvider } from "react-intl";
import App from "./App";
import messages_en from "./translations/en.json";
import messages_zh from "./translations/zh.json";
import * as serviceWorker from "./serviceWorker";
import "@formatjs/intl-relativetimeformat/polyfill";
import "@formatjs/intl-relativetimeformat/dist/locale-data/zh";
import "./index.css";

const messages = {
	en: messages_en,
	zh: messages_zh,
};
const language = navigator.language.split(/[-_]/)[0];

ReactDOM.render(
	<IntlProvider locale={language} messages={messages[language]}>
		<BrowserRouter>
			<React.StrictMode>
				<App locale={navigator.language} />
			</React.StrictMode>
		</BrowserRouter>
	</IntlProvider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
