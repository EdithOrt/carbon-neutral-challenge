import ProjectProfile from '../ProjectProfile';

const Project3 = ({data}) => {
    console.log(data)
    return ( 
        <div className='projects-views'>
            <ProjectProfile 
                name={data.name}
                img={data.img}
                lat={23.100273}
                long={-101.908098}
                totalOffsets={data.totalOffsets}
                aviableOffsets={data.availableOffsets}
                coBenefits={data.coBenefits}
                offsetPrice={data.offsetPrice}
                description={data.description}
                location={data.location}
                type={data.type}
                developer={data.developer}
                verifier={data.verifier}
                area={data.area}
                jobsGenerated={data.jobsGenerated}
            />
        </div>
     );
}
 
export default Project3;