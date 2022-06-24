import { Fragment } from "react";
import FormLoginSection from "../../components/FormLoginSection";
import PageTitle from "../../components/PageTitle";
import TopButtons from "../../components/TopButtons";
import { pageLocation } from "../../interfaces/interfaces";

export default function Login({pageLocation}: pageLocation){
    return(
        <Fragment>
            <TopButtons location={pageLocation} />
            <PageTitle />
            <FormLoginSection /> 
        </Fragment>
    );
}