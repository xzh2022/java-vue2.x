package com.xzh.common.dto;

import lombok.Data;

import javax.validation.constraints.NotBlank;

/**
 * @Author: xzh
 * @Description:
 * @Date: 2022/5/6
 */
@Data
public class PassDto {
    @NotBlank(message = "新密码不能为空")
    private String password;

    @NotBlank(message = "旧密码不能为空")
    private String currentPass;
}
