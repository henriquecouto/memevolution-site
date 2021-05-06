import loading from "../../assets/images/loading.gif";
import Text from "../Text";

import * as S from "./Loading.styles";

const Loading = () => {
  return (
    <S.LoadingWrapper>
      <S.LoadingGif src={loading} />
      <S.LoadingTextWrapper>
        <Text type="subtitle">O&nbsp;</Text>
        <Text color="primary-main" type="h2">
          MEMEVOLUTION
        </Text>
        <Text type="subtitle">&nbsp;tá carregando, pera aí...</Text>
      </S.LoadingTextWrapper>
    </S.LoadingWrapper>
  );
};

export default Loading;
