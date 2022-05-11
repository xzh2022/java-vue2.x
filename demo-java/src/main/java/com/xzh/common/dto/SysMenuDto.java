package com.xzh.common.dto;

import lombok.Data;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 * @Author: xzh
 * @Description:
 * @Date: 2022/5/5
 */
@Data
public class SysMenuDto implements Serializable {
    /**
     * {
     * 					name: 'SysUser',
     * 					title: '用户管理',
     * 					icon: 'el-icon-s-custom',
     * 					path: '/sys/users',
     * 					component: 'sys/User',
     * 					children: []
     *                                },
     */
    private Long id;
    private String name;
    private String title;
    private String icon;
    private String path;
    private String component;
    private List<SysMenuDto> children = new ArrayList<>();

}
