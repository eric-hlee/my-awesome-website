import React from "react";
import { shallow, mount } from "enzyme";
import { MemoryRouter } from "react-router";
import App from "../App";
import Home from "../components/Home";
import About from "../components/About";

describe("<App />", () => {
	it("renders IntlProvider, NavBar, BrowserRouter, Switch and Route", () => {
		const wrapper = shallow(<App />);
		expect(wrapper).toMatchSnapshot();
	});

	it("renders Home", () => {
		const wrapper = mount(
			<MemoryRouter>
				<App />
			</MemoryRouter>
		);
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find(Home)).toHaveLength(1);
		expect(
			wrapper.find("Router").first().prop("history").location.pathname
		).toEqual("/");
	});

	it("renders About", () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={["/about"]}>
				<App />
			</MemoryRouter>
		);
		expect(
			wrapper.find("Router").first().prop("history").location.pathname
		).toEqual("/about");
	});
});
