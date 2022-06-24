import { Fragment } from "react";
import FormSignUpSection from "../../components/FormSignUpSection";
import PageTitle from "../../components/PageTitle";
import TopButtons from "../../components/TopButtons";
import { pageLocation } from "../../interfaces/interfaces";

export default function SignUp({pageLocation}: pageLocation) {
    return (
        <Fragment>
            <TopButtons location={pageLocation} />
            <PageTitle />
            <FormSignUpSection />
        </Fragment>
    );
}