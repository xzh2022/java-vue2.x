package com.xzh.common.exception;

import org.springframework.security.core.AuthenticationException;
/**
 * @Author: xzh
 * @Description: 验证码错误异常
 * @Date: 2022/5/4
 */
public class CaptchaException extends AuthenticationException {

	public CaptchaException(String msg) {

		super(msg);
	}
}
