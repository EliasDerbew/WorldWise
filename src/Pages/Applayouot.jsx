import AppNav from "../components/AppNav";
import Sidebar from "../components/Sidebar";
import styles from "./AppLayout.module.css";
import Map from "../components/Map";

export default function Applayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
}
