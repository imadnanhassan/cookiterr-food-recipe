// eslint-disable-next-line no-unused-vars
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";

const Blog = () => {

	const [loader, setLoader] = useState(false);

	const downloadPDF = () => {
		const capture = document.querySelector('.actual-receipt');
		setLoader(true);
		html2canvas(capture).then((canvas) => {
			const imgData = canvas.toDataURL('img/png');
			const doc = new jsPDF('p', 'mm', 'a4');
			const componentWidth = doc.internal.pageSize.getWidth();
			const componentHeight = doc.internal.pageSize.getHeight();
			doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
			setLoader(false);
			doc.save('receipt.pdf');
		})
	}


	return (
		<>
			<section className="text-gray-600 body-font overflow-hidden container mx-auto">
				<div className="container px-5 py-24 mx-auto actual-receipt">
					<div className="-my-8 divide-y-2 divide-gray-100">
						<div className="py-8 flex flex-wrap md:flex-nowrap">
							<div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">


							</div>
							<div className="md:flex-grow">
								<h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
									Tell us the differences between uncontrolled and controlled components?
								</h2>
								<p className="leading-relaxed">
									In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.
								</p>
								<a className="text-green-500 inline-flex items-center mt-4">
									Learn More
									<FaArrowRight className='ml-2'></FaArrowRight>
								</a>
							</div>
						</div>
						<div className="py-8 flex flex-wrap md:flex-nowrap">
							<div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">

							</div>
							<div className="md:flex-grow">
								<h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
									Tell us the difference between nodejs and express js.?

								</h2>
								<p className="leading-relaxed">
									Node.js provides an environment for running JavaScript code on the server-side, which enables developers to build server-side applications using JavaScript. Node.js is built on top of the Google V8 engine and uses an event-driven, non-blocking I/O model that allows it to handle a large number of concurrent connections efficiently.
									Express.js is a web application framework built on top of Node.js that simplifies the process of building web applications. It provides a set of features and tools that make it easy to define routes, handle requests, and manage middleware in a web application.
								</p>
								<a className="text-green-500 inline-flex items-center mt-4">
									Learn More
									<FaArrowRight className='ml-2'></FaArrowRight>
								</a>
							</div>
						</div>
						<div className="py-8 flex flex-wrap md:flex-nowrap">
							<div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">

							</div>
							<div className="md:flex-grow">
								<h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
									How to validate React props using PropTypes?
								</h2>
								<p className="leading-relaxed">
									Props and PropTypes are important mechanisms for passing read-only attributes between React components. React has a built-in package called PropTypes that allows you to validate the props that are passed to your components. This package provides a set of validators that can check the type of the props, whether the props are required, and even whether the props should match a certain pattern.


								</p>
								<a className="text-green-500 inline-flex items-center mt-4">
									Learn More
									<FaArrowRight className='ml-2'></FaArrowRight>
								</a>
							</div>
						</div>
						<div className="py-8 flex flex-wrap md:flex-nowrap">
							<div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">

							</div>
							<div className="md:flex-grow">
								<h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
									What is a custom hook, and why will you create a custom hook?
								</h2>
								<p className="leading-relaxed">
									A custom hook is a JavaScript function that allows you to extract and reuse logic from a React functional component. Custom hooks are a powerful feature of React that allows you to share functionality across multiple components in a clean and efficient way. By encapsulating a specific piece of logic into a custom hook, you can reuse that logic in multiple components and avoid duplicating code.
									Custom hooks can be created to extract logic and state management from React components, making them reusable across multiple components. They allow us to separate concerns and keep our code organized, reducing the amount of code repetition and making it easier to maintain.

								</p>
								<a className="text-green-500 inline-flex items-center mt-4">
									Learn More
									<FaArrowRight className='ml-2'></FaArrowRight>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className='flex items-center justify-center py-6'>
					<button
						className="text-center bg-green-600 text-white px-5 py-3 rounded-sm"
						onClick={downloadPDF}
						disabled={!(loader === false)}
					>
						{loader ? (
							<span>Downloading</span>
						) : (
							<span>Download PDF</span>
						)}

					</button>
				</div>
			</section>

		</>


	);
};

export default Blog;