/* eslint-disable react/prop-types */

const SectionTitle = ({ heading, subHeading }) =>
{
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <p className="text-teal-500 mb-2">~~~ {subHeading} ~~~</p>
            <h1 className="text-4xl uppercase italic border-y-4 py-4">{heading}</h1>
        </div>
    );
};

export default SectionTitle;