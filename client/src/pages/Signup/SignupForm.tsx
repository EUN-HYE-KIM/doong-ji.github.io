import { ExclamationCircleTwoTone, CheckCircleTwoTone } from '@ant-design/icons';
import { Button, Input, Form, Select } from 'antd';
import styled from '@emotion/styled';

import { Message } from '@/utils/signupMessage';
import theme from '@/theme';

interface SignupFormProps {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  nickname: string;
  part: string;
  isNameValid: boolean;
  isEmailValid: boolean;
  isPasswordValid: boolean;
  isPasswordReValid: boolean;
  isNicknameValid: boolean;
  onChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePasswordReHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeNickname: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickSuccessSignup: () => void;
  onChangePart: (value: string) => void;
}

const SignupForm: React.FC<SignupFormProps> = ({
  name,
  email,
  password,
  passwordConfirm,
  nickname,
  part,
  isNameValid,
  isEmailValid,
  isPasswordValid,
  isPasswordReValid,
  isNicknameValid,
  onChangeName,
  onChangeEmail,
  onChangePassword,
  onChangePasswordReHandler,
  onChangeNickname,
  onClickSuccessSignup,
  onChangePart,
}) => {
  const { Option } = Select;
  const suffix = (isVaildValue: boolean) => {
    return isVaildValue ? (
      <CheckCircleTwoTone twoToneColor={theme.PRIMARY_COLOR} />
    ) : (
      <ExclamationCircleTwoTone twoToneColor={theme.WARNING_COLOR} />
    );
  };

  const validateStatus = (isVaildValue: boolean, value: string) => {
    return !isVaildValue && value.length !== 0 ? 'error' : '';
  };

  const help = (isVaildValue: boolean, value: string, helpMessage: string): string | false => {
    return !isVaildValue && value.length !== 0 && helpMessage;
  };

  const layout = {
    labelCol: { span: 20 },
    wrapperCol: { span: 25 },
  };

  return (
    <SignupSection>
      <SignupTitle>회원가입</SignupTitle>
      <Form style={{ width: '100%' }} layout="vertical" {...layout}>
        <Form.Item
          name="아이디"
          label="아이디"
          validateStatus={validateStatus(isEmailValid, email)}
          help={help(isEmailValid, email, Message.EmailMessage)}
          rules={[{ required: true }]}
        >
          <Input
            value={email}
            title="아이디"
            placeholder="아이디(이메일 주소)를 입력해 주세요."
            onChange={onChangeEmail}
            suffix={suffix(isEmailValid)}
            autoComplete="off"
          />
        </Form.Item>

        <Form.Item
          name="비밀번호"
          label="비밀번호"
          validateStatus={validateStatus(isPasswordValid, password)}
          help={help(isPasswordValid, password, Message.PasswordMessage)}
          rules={[{ required: true }]}
        >
          <Input
            value={password}
            type="password"
            title="비밀번호"
            placeholder="비밀번호를 입력해 주세요."
            onChange={onChangePassword}
            suffix={suffix(isPasswordValid)}
            autoComplete="off"
          />
        </Form.Item>

        <Form.Item
          name="비밀번호 재확인"
          label="비밀번호 재확인"
          validateStatus={validateStatus(isPasswordReValid, passwordConfirm)}
          help={help(isPasswordReValid, passwordConfirm, Message.PasswordCheckMessage)}
          rules={[{ required: true }]}
        >
          <Input
            value={passwordConfirm}
            type="password"
            title="비밀번호 재확인"
            placeholder="비밀번호를 한번 더 입력해 주세요."
            onChange={onChangePasswordReHandler}
            suffix={suffix(isPasswordReValid)}
            autoComplete="off"
          />
        </Form.Item>

        <Form.Item
          name="이름"
          label="이름"
          validateStatus={validateStatus(isNameValid, name)}
          help={help(isNameValid, name, Message.NameMessage)}
          rules={[{ required: true }]}
        >
          <Input
            title="이름"
            value={name}
            placeholder="닉네임을 입력해 주세요."
            onChange={onChangeName}
            suffix={suffix(isNameValid)}
            autoComplete="off"
          />
        </Form.Item>

        <Form.Item
          name="닉네임"
          label="닉네임"
          validateStatus={validateStatus(isNicknameValid, nickname)}
          help={help(isNicknameValid, nickname, Message.NicknameMessage)}
          rules={[{ required: true }]}
        >
          <Input
            title="닉네임"
            value={nickname}
            placeholder="닉네임을 입력해 주세요."
            onChange={onChangeNickname}
            suffix={suffix(isNicknameValid)}
            autoComplete="off"
          />
        </Form.Item>

        <Form.Item name="파트" label="파트" rules={[{ required: true }]}>
          <Select showSearch placeholder="파트를 선택해 주세요." onChange={onChangePart}>
            <Option value="frontend">frontend</Option>
            <Option value="backend">backend</Option>
            <Option value="publisher">publisher</Option>
            <Option value="Android">Android</Option>
            <Option value="ios">ios</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button
            block
            type="primary"
            onClick={onClickSuccessSignup}
            disabled={
              !isNameValid || !isEmailValid || !isPasswordValid || !isPasswordReValid || !isNicknameValid || !part
            }
          >
            가입하기
          </Button>
        </Form.Item>
      </Form>
    </SignupSection>
  );
};

const SignupSection = styled.section`
  box-shadow: 0 1px 5px 0 rgb(0 0 0 / 50%);
  padding: 30px 60px;
  margin: 0 auto;
  border-radius: 20px;
  width: 100%;
  max-width: 600px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const SignupTitle = styled.h1`
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 40px;
`;

export default SignupForm;
