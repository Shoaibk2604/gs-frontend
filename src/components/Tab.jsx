import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Form from "./Form";
import Table from "./Table";
const TabSwitch = () => {
  return (
    <>
    
      <div className="mx-12">
        <Tabs>
          <TabList>
            <Tab>User Mangament</Tab>
            <Tab>Product Details</Tab>
            <Tab>Product Price</Tab>
            <Tab>Product Inventory</Tab>
            <Tab>Supplier</Tab>
          </TabList>
          <TabPanel>
            <div className="grid grid-cols-3">
              <div className="col-span-2">
                <Table />
              </div>
              <div>
                <Form />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3">
              <div className="col-span-2">
                <Table />
              </div>
              <div>
                <Form />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3">
              <div className="col-span-2">
                <Table />
              </div>
              <div>
                <Form />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3">
              <div className="col-span-2">
                <Table />
              </div>
              <div>
                <Form />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3">
              <div className="col-span-2">
                <Table />
              </div>
              <div>
                <Form />
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};
export default TabSwitch;
