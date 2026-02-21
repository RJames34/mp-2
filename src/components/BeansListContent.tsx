import { useEffect, useState } from "react";
// Added type because webstorm was giving me a flag for missing it
import  type { Bean, BeanResponse } from "../types/types";
import BeanPreview , {BeansDiv}from "./BeanPreview";


export default function BeansListContent() {
    const [beans, setBeans] = useState<Bean[]>([]);

    useEffect(() => {
        async function loadBeans() {
            const res = await fetch(
                "https://jellybellywikiapi.onrender.com/api/beans"
            );
            const json: BeanResponse = await res.json();
            setBeans(json.items); // show ALL beans
        }

        loadBeans().catch(e => console.error(e));
    }, []);

    return (
        <div>
            <h1>Jelly Belly Beans</h1>

            <BeansDiv>
                {beans.map((bean) => (
                    <BeanPreview key={bean.beanId} bean={bean} />
                ))}
            </BeansDiv>
        </div>
    );
}
