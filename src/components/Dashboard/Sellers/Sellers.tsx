import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Input from "../../modals/Input";
import style from "./Sellers.module.scss";
import Button from "../../modals/Button";
import Inventory from "./Inventory";

enum sellerStatus {
  registered,
  unregisted,
  dormant,
  pending,
}
interface Seller {
  username: string;
  email: string;
  sellerStatus: sellerStatus;
}

const Sellers: React.FC = () => {
  const [data, setdata] = useState<Seller[]>([]);
  const [filesMeta, setFilesMeta] = useState<any[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const handleFiles = () => {
    if (!selectedFiles) return;

    const metadata = Array.from(selectedFiles).map((file) => ({
      name: file.name,
      size: file.size,
      type: file.type,
      lastModified: file.lastModified,
      objectUrl: URL.createObjectURL(file),
      file,
    }));

    setFilesMeta(metadata);
    console.log("Metadata:", metadata);
    console.log("Metadata:", filesMeta);
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (!data) {
      navigate("/login");
    } else {
      const addData = () => {
        setdata((prev) => [
          ...prev,
          {
            username: "hello",
            email: "test@example.com",
            sellerStatus: sellerStatus.registered,
          },
        ]);
      };
      addData();
    }
  }, []);

  const handleSubmit = () => {
    console.log("Submitted on Sellers Dashboard");
    handleFiles();
    console.log("Did this work?");
  };
  return (
    <div className={`${style.boxHead}`}>
      <div className={`${style.box}`}>
        <Input label="Name" tov="text" name="name" />
        <Input label="Company Name" tov="text" name="companyName" />
        <Input label="Address #1" tov="text" name="Address" />
        <Input label="Address #2" tov="text" name="Address" />
        <Input label="City" tov="text" name="City" />
        <Input label="State" tov="text" name="State" />
        <Input label="Pincode" tov="number" name="Pincode" />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <label htmlFor="">Add All photos of flowers you sell</label>
          <input
            onChange={(e) => setSelectedFiles(e.target.files)}
            style={{
              margin: "auto",
            }}
            type="file"
            multiple
            name=""
            id=""
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBlock: "8px",
          }}
        >
          <Button workFn={handleSubmit} text="Submit" />
        </div>
      </div>
      <Inventory />
    </div>
  );
};

export default Sellers;
