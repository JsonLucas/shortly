import { Fragment } from "react";
import PageTitle from "../../components/PageTitle";
import RankingIcon from "../../components/RankingIcon";
import RankingSection from "../../components/RankingSection";
import TopButtons from "../../components/TopButtons";
import { pageLocation } from "../../interfaces/interfaces";

export default function Home({pageLocation}: pageLocation){
    return(
        <Fragment>
            <TopButtons location={pageLocation} />
            <PageTitle />
            <RankingIcon />
            <RankingSection />
        </Fragment>
    );
}