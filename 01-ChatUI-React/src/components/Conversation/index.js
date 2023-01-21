import React from "react";
import PropTypes from "prop-types";
import StyledConversation, { Conversations, MyChatBubble } from "./style";
import TitleBar from "components/TitleBar";
import ChatBubble from "components/ChatBubble";
import VoiceMessage from "components/VoiceMessage";
import Emoji from "components/Emoji";
import Footer from "components/Footer";
import { useSpring } from "react-spring";

function Conversation({ onAvatarClick, onVideoClicked, children, ...rest }) {
  const tBarAnimeProps = useSpring({
    opacity: 1,
    transform: "translate3d(0px, 0px, 0px)",
    from: { opacity: 0, transform: "translate3d(0px, -50px, 0px)" },
    delay: 500,
  });

  const convsAnimeProps = useSpring({
    opacity: 1,
    transform: "translate3d(0px, 0px, 0px)",
    from: { opacity: 0, transform: "translate3d(50px, 0px, 0px)" },
    delay: 600,
  });

  const ftAnimeProps = useSpring({
    opacity: 1,
    transform: "translate3d(0px, 0px, 0px)",
    from: { opacity: 0, transform: "translate3d(0px, 50px, 0px)" },
    delay: 750,
  });

  return (
    <StyledConversation {...rest}>
      <TitleBar
        onVideoClicked={onVideoClicked}
        onAvatarClick={onAvatarClick}
        animeProps={tBarAnimeProps}
      />
      <Conversations style={convsAnimeProps}>
        <ChatBubble time="昨天 晚上9:19">关于麦肯锡的案例
        </ChatBubble>
        <MyChatBubble time="昨天 晚上9:45">
          有一个老头，正在草地上放羊，忽然走来一个年轻人，年经人走到老头面前说：老先生，我可以为您服务，我将告诉您您的这群羊有几头，作为酬劳您需要给我一头羊。
        </MyChatBubble>
        <MyChatBubble time="昨天 晚上9:47">老头还未作答，年青人就开始了工作，年轻人用笔记本电脑无线上网，链接上NASA的内部网，调动低轨道卫星，把卫星遥感成像的图片再通过软件分析。</MyChatBubble>
        <MyChatBubble time="昨天 晚上9:53">数十分钟后，年轻人再次走到老头面前：老先生，您的羊群共有763头。说完后他抱起一只羊就要走。</MyChatBubble>
        <MyChatBubble time="昨天 晚上9:55">老头这时叫住了年青人：年青人，如果我能猜出你就职的公司，你可不可以把酬劳还给我？</MyChatBubble>
        <MyChatBubble time="昨天 晚上10:00">可以，年轻人答。你是麦肯锡公司的，老头说。</MyChatBubble>
        <MyChatBubble time="昨天 晚上10:10">年轻人很惊讶，您怎么知道？老头笑了：因为你具有该公司咨询人员的所有特点啊，第一。你不请自来。第二。你告诉我的分析结果是我本就知道的。第三。你抱走的不是羊，而是我的牧羊犬。</MyChatBubble>
        <ChatBubble time="上午6:27">
          <VoiceMessage time="13:41" />
        </ChatBubble>
        <MyChatBubble time="上午8:20">
          出处不详。
          <Emoji label="smile">😜</Emoji>
        </MyChatBubble>
      </Conversations>
      <Footer animeProps={ftAnimeProps} />
    </StyledConversation>
  );
}

Conversation.propTypes = {
  children: PropTypes.any,
};

export default Conversation;
