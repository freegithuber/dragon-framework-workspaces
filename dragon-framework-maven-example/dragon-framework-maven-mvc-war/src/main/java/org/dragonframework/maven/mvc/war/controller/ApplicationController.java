/*
 * Copyright 2002-2122 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.dragonframework.maven.mvc.war.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.dragonframework.maven.mvc.war.ApplicationProperties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Date;

/**
 *
 */
@Api(tags = "测试模块", description = "测试模块接口文档")
@Tag(name = "测试模块", description = "测试模块接口文档")
@Controller
public class ApplicationController {

    /**
     *
     */
    private final ApplicationProperties applicationProperties;

    /**
     *
     */
    @Autowired
    public ApplicationController(ApplicationProperties applicationProperties) {
        this.applicationProperties = applicationProperties;
    }

    /**
     *
     */
    @ApiOperation(value = "起始路径", notes = "起始路径。")
    @Operation(summary = "起始路径", description = "起始路径。")
    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String root() {
        return "redirect:index";
    }

    /**
     *
     */
    @ApiOperation(value = "首页路径", notes = "首页路径。")
    @Operation(summary = "首页路径", description = "首页路径。")
    @RequestMapping(value = "/index", method = RequestMethod.GET)
    public String index() {
        return "index";
    }

    /**
     *
     */
    @ApiOperation(value = "欢迎路径", notes = "欢迎路径。")
    @Operation(summary = "欢迎路径", description = "欢迎路径。")
    @RequestMapping(value = "/welcome", method = RequestMethod.GET)
    @ResponseBody
    public Date welcome() {
        return new Date();
    }

    /**
     *
     */
    @ApiOperation(value = "欢迎信息", notes = "欢迎信息。")
    @Operation(summary = "欢迎信息", description = "欢迎信息。")
    @RequestMapping(value = "/message", method = RequestMethod.GET)
    @ResponseBody
    public String message() {
        return this.applicationProperties.getMessage();
    }

}
