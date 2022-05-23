import { SinkRepair } from "./SinkRepair.js"
import { fetchRequests, fetchPlumbers } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests()
    .then(() => fetchPlumbers())
    .then (
        () => {
    mainContainer.innerHTML = SinkRepair()
        }
    )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        console.log("State of data has changed. Regenerating HTML...")
        render()
    }
)