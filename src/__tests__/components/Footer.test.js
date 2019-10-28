import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Footer from "../../components/footer/Footer";


describe("<Footer /> UI Component", () => {
	it("renders default Footer", () => {
		Enzyme.configure({ adapter: new Adapter() });
		expect(
			Enzyme.shallow(<Footer/>)
				.find('footer')
				.length
		).toBe(1)
	});
});
