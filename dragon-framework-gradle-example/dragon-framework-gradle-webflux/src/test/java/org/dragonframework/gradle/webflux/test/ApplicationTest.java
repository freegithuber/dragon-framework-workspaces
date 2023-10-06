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
package org.dragonframework.gradle.webflux.test;

import org.dragonframework.gradle.webflux.Application;
import org.dragonframework.gradle.webflux.ApplicationProperties;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.reactive.AutoConfigureWebTestClient;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.reactive.server.WebTestClient;

/**
 *
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class)
@AutoConfigureWebTestClient
public class ApplicationTest {

    /**
     *
     */
    private WebTestClient webTestClient;

    /**
     *
     */
    @Autowired
    public void setWebTestClient(WebTestClient webTestClient) {
        this.webTestClient = webTestClient;
    }

    /**
     *
     */
    private ApplicationProperties applicationProperties;

    /**
     *
     */
    @Autowired
    public void setApplicationProperties(ApplicationProperties applicationProperties) {
        this.applicationProperties = applicationProperties;
    }

    /**
     *
     */
    @Test
    public void welcome() {
        this.webTestClient.get().uri("/welcome")
            .header("Authorization", "Bearer " + this.applicationProperties.getAuthorization())
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus().isOk()
            .expectBody(String.class)
            .consumeWith(result -> {
                System.out.println(result);
            });
    }

    /**
     *
     */
    @Test
    public void example() {
        System.out.println(this.applicationProperties.getMessage());
    }

}
