import './Home.css'
import Card from "./components/Card/card.jsx";
import Button from "./components/button.jsx";
import Input from "./components/Input/input.jsx";
import {KeyPressProvider} from "./utils/context/keyPressContext.jsx";

function Home() {

    return (
        <KeyPressProvider>
        <div>
            <Card>
                {/*Résultat*/}
                <div
                    className={"text-center col-span-4 mb-5 align-middle text-xl leading-9 font-bold rounded-full hover:cursor-pointer hover:bg-btn-op h-9"}>
                    <Input/>
                </div>
                {/*Première ligne*/}
                <Button color={"bg-btn-func text-background"} size={"col-span-1"}>C</Button>
                <Button color={"bg-btn-func text-background"} size={"col-span-1"}>±</Button>
                <Button color={"bg-btn-func text-background"} size={"col-span-2"}>← Suppr</Button>

                {/*Deuxième ligne*/}
                <Button color={"bg-btn-primary"} size={"col-span-1"}>7</Button>
                <Button color={"bg-btn-primary"} size={"col-span-1"}>8</Button>
                <Button color={"bg-btn-primary"} size={"col-span-1"}>9</Button>
                <Button color={"bg-btn-op"} size={"col-span-1"}>×</Button>

                {/*Troisième ligne*/}
                <Button color={"bg-btn-primary"} size={"col-span-1"}>4</Button>
                <Button color={"bg-btn-primary"} size={"col-span-1"}>5</Button>
                <Button color={"bg-btn-primary"} size={"col-span-1"}>6</Button>
                <Button color={"bg-btn-op"} size={"col-span-1"}>-</Button>

                {/*Quatrième ligne*/}
                <Button color={"bg-btn-primary"} size={"col-span-1"}>1</Button>
                <Button color={"bg-btn-primary"} size={"col-span-1"}>2</Button>
                <Button color={"bg-btn-primary"} size={"col-span-1"}>3</Button>
                <Button color={"bg-btn-op"} size={"col-span-1"}>+</Button>

                {/*Cinquième ligne*/}
                <Button color={"bg-btn-primary"} size={"col-span-2"}>0</Button>
                <Button color={"bg-btn-primary"} size={"col-span-1"}>,</Button>
                <Button color={"bg-btn-op"} size={"col-span-1"}>=</Button>

            </Card>
        </div>
        </KeyPressProvider>
    )
}

export default Home
