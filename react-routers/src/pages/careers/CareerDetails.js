import { useLoaderData } from 'react-router-dom';

export default function CareerDetails() {
    const career = useLoaderData()
    return (
        <div className="career-details">
            <h2>Career Details for {career.title}</h2>
            <p>Starting salary: {career.salary}</p>
            <p>Location: {career.location}</p>
            <div className="details">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non neque imperdiet ex faucibus porttitor.
                    Duis tincidunt pellentesque ligula a rutrum. Ut non velit dui. Maecenas suscipit, nunc nec fringilla pulvinar,
                    turpis mi finibus leo, gravida vulputate elit risus id quam. Nulla id magna congue, porta turpis at, fermentum dui.
                    Proin condimentum consequat elementum. Donec tincidunt feugiat est, id mattis erat sagittis id. Cras pretium augue id mauris
                    egestas ultricies. Fusce aliquam porta metus non malesuada. Maecenas auctor ut massa nec fermentum.</p>
            </div>
        </div>
    )
}


//loader function
export const careerDetailsLoader = async ({ params }) => {
    const { id } = params
    const res = await fetch('http://localhost:4000/careers/' + id);

    return res.json();
}