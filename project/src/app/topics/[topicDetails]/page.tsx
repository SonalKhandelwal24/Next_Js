export default function page({params} : any) {

    console.log(params.topicDetails);
   const name = params.topicDetails;
    
    return(
        <div style={{ marginTop: "54px"}}>
        <div
            className=" p-4 p-md-5 mb-4 text-dark rounded bg-light "

            style={{
                padding: '1rem', // equivalent to p-4
                paddingTop: '1.25rem', // equivalent to p-md-5
                paddingBottom: '1.25rem', // equivalent to p-md-5
                marginBottom: '1rem', // equivalent to mb-4
                borderRadius: '0.375rem', // equivalent to rounded
                backgroundColor: 'rgba(0, 0, 0, 0.8)', // equivalent to bg-dark
                fontFamily: "serif"
                }}
        >
            <div
                className="col-md-6 px-0"
                style={{
                    paddingLeft: 0,
                    paddingRight: 0,
                    width: "100%",
                }}
            >
                <h1 className="display-4 fst-italic" >{name}</h1>
                <p className="lead my-3 ">Data science is a multidisciplinary field that combines various techniques and tools to extract insights and knowledge from data. It involves the use of statistical methods, machine learning, data analysis, and programming to solve complex problems and make data-driven decisions. Here’s a brief overview of key areas and concepts in data science:</p>
                <h3 className=" fst-italic">Programming Languages</h3>
                <p className="lead my-3 ">
                    Python: Widely used in data science for its rich ecosystem of libraries such as NumPy, pandas, scikit-learn, TensorFlow, and Keras.
                    R: Known for its statistical analysis capabilities and extensive packages for data manipulation and visualization.
                    SQL: Essential for querying and managing data in relational databases.</p>
                <h3 className=" fst-italic">Applications </h3>
                <p className="lead my-3 ">
                    Business Analytics: Using data to drive business decisions, optimize operations, and improve customer experiences.
                    Finance: Analyzing financial data for risk management, fraud detection, and investment strategies.
                    Healthcare: Applying data science to medical research, patient care, and operational efficiency.
                    Marketing: Understanding customer behavior, segmenting markets, and optimizing campaigns through data analysis.</p>
                <h3 className=" fst-italic">Tools and Libraries </h3>
                <p className="lead my-3 ">
                    Business Analytics: Using data to drive business decisions, optimize operations, and improve customer experiences.
                    Finance: Analyzing financial data for risk management, fraud detection, and investment strategies.
                    Healthcare: Applying data science to medical research, patient care, and operational efficiency.
                    Marketing: Understanding customer behavior, segmenting markets, and optimizing campaigns through data analysis.</p>
                <h3 className=" fst-italic">Learning Path</h3>
                <p className="lead my-3 ">
                    Business Analytics: Using data to drive business decisions, optimize operations, and improve customer experiences.
                    Finance: Analyzing financial data for risk management, fraud detection, and investment strategies.
                    Healthcare: Applying data science to medical research, patient care, and operational efficiency.
                    Marketing: Understanding customer behavior, segmenting markets, and optimizing campaigns through data analysis.</p>
                <p className="lead mb-0">
                    <a href="#" className="text-white fw-bold">Continue reading...</a>
                </p>

                </div>
        </div>
    </div>
    )
};