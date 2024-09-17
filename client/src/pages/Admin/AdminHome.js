import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
            Empowering Lives Through Blood Donation At City Blood Bank, we are
            dedicated to saving lives and ensuring the availability of safe,
            high-quality blood and blood products. Our mission is to connect
            generous donors with those in urgent need of blood, enhancing the
            health and well-being of our community. Discover the Power of
            Donation Our app provides an intuitive platform for managing your
            blood donation journey. Whether you're a first-time donor or a
            regular contributor, our app makes it easier than ever to
            participate in this life-saving act.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
