import React from "react";
import PropTypes from "prop-types";
import StyledProfile, {
  SocialLinks,
  ContactSection,
  Album,
  Photo,
  AlbumSection,
  AlbumTitle,
  CloseIcon,
} from "./style";
import "styled-components/macro";
import face from "assets/images/face-male-3.jpg";
import Avatar from "components/Avatar";
import Paragraph from "components/Paragraph";
import Emoji from "components/Emoji";
import Icon from "components/Icon";

import {
  faWeibo,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Seperator from "components/Seperator";
import Text from "components/Text";

import photo1 from "assets/images/photo1.jpg";
import photo2 from "assets/images/photo2.jpg";
import photo3 from "assets/images/photo3.jpg";

import { ReactComponent as Cross } from "assets/icons/cross.svg";
import Button from "components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

function Profile({
  showEditBtn,
  showCloseIcon = true,
  onCloseClick,
  onEdit,
  status,
  children,
  ...rest
}) {
  return (
    <StyledProfile {...rest}>
      {showCloseIcon && <CloseIcon icon={Cross} onClick={onCloseClick} />}
      <Avatar
        css={`
          margin: 26px 0;
          grid-area: 1 / 1 / 3 / 2;
        `}
        src={face}
        size="180px"
        status={status}
        statusIconSize="25px"
      />
      {showEditBtn && (
        <Button
          size="52px"
          onClick={onEdit}
          css={`
            grid-area: 1 / 1 / 3 / 2;
            align-self: end;
            margin-left: 100px;
            z-index: 10;
          `}
        >
          <FontAwesomeIcon
            css={`
              font-size: 24px;
            `}
            icon={faPen}
          />
        </Button>
      )}
      <Paragraph
        size="xlarge"
        css={`
          margin-bottom: 12px;
        `}
      >
        Bezhuang
      </Paragraph>
      <Paragraph
        size="medium"
        type="secondary"
        css={`
          margin-bottom: 18px;
        `}
      >
        上海 虹口
      </Paragraph>
      <Paragraph
        css={`
          margin-bottom: 26px;
        `}
      >
        React 课程实战，<Emoji label="computer">💻</Emoji>，以即时通信聊天为原型，构建的一整套的 UI 组件库。{" "}

      </Paragraph>
      <SocialLinks>
        <Icon.Social
          icon={faWeibo}
          bgColor="#F06767"
          href="https://weibo.com/u/7798754924"
        />
        <Icon.Social icon={faGithub} bgColor="black" href="https://Github.com/Bezhuang" />
        <Icon.Social icon={faYoutube} bgColor="blue" href="https://space.bilibili.com/30593492" />
      </SocialLinks>
      <Seperator
        css={`
          margin: 30px 0;
        `}
      />
      <ContactSection>
        <Description label="手机/微信">13818993049</Description>
        <Description label="电子邮件">bezhuang@outlook.com</Description>
        <Description label="博客">https://blog.zhuangzhihao.top</Description>
      </ContactSection>
      <Seperator
        css={`
          margin: 30px 0;
        `}
      />
      <AlbumSection>
        <AlbumTitle>
          <Text type="secondary">相册（10）</Text>
          <a>查看全部</a>
        </AlbumTitle>
        <Album>
          <Photo src={photo1} alt="" />
          <Photo src={photo2} alt="" />
          <Photo src={photo3} alt="" />
        </Album>
      </AlbumSection>
    </StyledProfile>
  );
}

function Description({ label, children }) {
  return (
    <Paragraph>
      <Text type="secondary">{label}：</Text>
      <Text>{children}</Text>
    </Paragraph>
  );
}

Profile.propTypes = {
  children: PropTypes.any,
};

export default Profile;
