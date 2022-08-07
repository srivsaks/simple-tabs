import "./styles.css";
import Tabs from "./tabs";

const tabEle = document.querySelector(".tabs");
const tabs = new Tabs(tabEle);
tabs.init();
