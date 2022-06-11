import { Fragment } from "react";
import FormSignUpSection from "../../components/FormSignUpSection";
import PageTitle from "../../components/PageTitle";
import TopButtons from "../../components/TopButtons";

export default function SignUp() {
    return (
        <Fragment>
            <TopButtons />
            <PageTitle />
            <FormSignUpSection />
        </Fragment>
    );
}