import { Fragment, useEffect, useState } from "react";
import LinkShortenerSection from "../../components/LinkShortenerSection";
import PageTitle from "../../components/PageTitle";
import RankingIcon from "../../components/RankingIcon";
import RankingSection from "../../components/RankingSection";
import TopButtons from "../../components/TopButtons";
import { IPageLocation } from "../../interfaces/interfaces";

export default function Home({pageLocation}: IPageLocation){
    const [logged, setLogged] = useState<boolean>(false);
    useEffect(() => {
        const authLocal = localStorage.getItem('authorization');
        if(authLocal){
            setLogged(true);
        }
    }, []);
    return(
        <Fragment>
            <TopButtons location={pageLocation} />
            <PageTitle />
            {!logged && 
                <Fragment>
                    <RankingIcon />
                    <RankingSection />
                </Fragment>
            }
            {logged && <LinkShortenerSection />}
        </Fragment>
    );
}