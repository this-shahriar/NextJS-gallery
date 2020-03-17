import { NavWrapper } from "./Wrapper";
import { Row, Col, Button } from "antd";

const Nav = props => {
  return (
    <NavWrapper>
      <Row className='flex-row align-center'>
        <Col span={8}>
          <img src='/static/logo.png' /> 
        </Col>
        <Col className='right-text' span={16}>
          <Button type='primary'>Submit your design here</Button>
        </Col>
      </Row>
    </NavWrapper>
  );
};

export default Nav;
