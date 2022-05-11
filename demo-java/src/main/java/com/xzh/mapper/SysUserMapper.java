package com.xzh.mapper;

import com.xzh.entity.SysUser;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author xzh
 * @since 2022-05-04
 */
@Repository
public interface SysUserMapper extends BaseMapper<SysUser> {
    List<Long> getNavMenuIds(Long userId);

    List<SysUser> listByMenuId(Long menuId);

}
