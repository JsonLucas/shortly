import { Fragment } from "react";
import FormLoginSection from "../../components/FormLoginSection";
import PageTitle from "../../components/PageTitle";
import TopButtons from "../../components/TopButtons";
import { IPageLocation } from "../../interfaces/interfaces";

export default function Login({pageLocation}: IPageLocation){
    return(
        <Fragment>
            <TopButtons location={pageLocation} />
            <PageTitle />
            <FormLoginSection /> 
        </Fragment>
    );
}