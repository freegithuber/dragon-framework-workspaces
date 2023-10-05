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
package org.dragonframework.maven.webflux;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.web.server.WebFilter;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.builders.RequestParameterBuilder;
import springfox.documentation.builders.ResponseBuilder;
import springfox.documentation.schema.ScalarType;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.ParameterType;
import springfox.documentation.service.RequestParameter;
import springfox.documentation.service.Response;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.ArrayList;
import java.util.List;

/**
 *
 */
@Configuration
@EnableConfigurationProperties({ApplicationProperties.class})
@EnableSwagger2
public class ApplicationConfiguration {

    /**
     *
     */
    @Value("${spring.webflux.base-path:/}")
    private String contextPath;

    /**
     * Spring Boot 2.2.X 及以下版本添加 contextPath 需要配置如下对象。
     */
    @Bean
    public WebFilter contextPathWebFilter() {
        return (exchange, chain) -> {
            ServerHttpRequest request = exchange.getRequest();
            if (request.getURI().getPath().startsWith(this.contextPath)) {
                exchange = exchange.mutate().request(request.mutate().contextPath(this.contextPath).build()).build();
            }
            return chain.filter(exchange);
        };
    }

    /**
     *
     */
    @Bean
    public Docket mavenWebfluxDocket(final ApplicationProperties applicationProperties) {

        List<RequestParameter> requestParameters = new ArrayList<>();

        requestParameters.add(
            new RequestParameterBuilder()
                .name("Authorization")
                .description("Authorization访问令牌")
                .in(ParameterType.HEADER)
                .query(
                    simpleParameterSpecificationBuilder -> simpleParameterSpecificationBuilder
                        .model(
                            modelSpecificationBuilder -> modelSpecificationBuilder.scalarModel(ScalarType.STRING)
                        )
                        .defaultValue("Bearer " + applicationProperties.getAuthorization())
                )
                .required(Boolean.TRUE)
                .hidden(Boolean.TRUE)
                .build()
        );

        List<Response> responses = new ArrayList<>();

        responses.add(
            new ResponseBuilder()
                .code("404")
                .description("NotFound")
                .build()
        );

        ApiInfo apiInfo = new ApiInfoBuilder()
            .title("dragon-framework-maven-webflux")
            .description("dragon-framework-maven-webflux documents")
            .version("1.0.0-SNAPSHOT")
            .build();

        Docket docket = new Docket(DocumentationType.SWAGGER_2)
            .groupName("dragon-framework-maven-webflux")
            .apiInfo(apiInfo)
            .select()
            .apis(RequestHandlerSelectors.basePackage("org.dragonframework.maven.webflux"))
            .paths(PathSelectors.any())
            .build();

        docket.globalRequestParameters(requestParameters);    // 添加全局参数
        docket.globalResponses(HttpMethod.POST, responses);   // 添加全局响应
        docket.globalResponses(HttpMethod.DELETE, responses); // 添加全局响应
        docket.globalResponses(HttpMethod.PUT, responses);    // 添加全局响应
        docket.globalResponses(HttpMethod.GET, responses);    // 添加全局响应

        return docket;
    }

}
