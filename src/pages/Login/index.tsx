import { Fragment } from "react";
import FormLoginSection from "../../components/FormLoginSection";
import PageTitle from "../../components/PageTitle";
import TopButtons from "../../components/TopButtons";

export default function Login(){
    return(
        <Fragment>
            <TopButtons />
            <PageTitle />
            <FormLoginSection /> 
        </Fragment>
    );
}