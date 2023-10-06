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
package org.dragonframework.gradle.mvc.jar.test;

import org.dragonframework.gradle.mvc.jar.Application;
import org.dragonframework.gradle.mvc.jar.ApplicationProperties;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

/**
 *
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class)
@AutoConfigureMockMvc
public class ApplicationTest {

    /**
     *
     */
    private MockMvc mockMvc;

    /**
     *
     */
    @Autowired
    public void setMockMvc(MockMvc mockMvc) {
        this.mockMvc = mockMvc;
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
    public void welcome() throws Throwable {
        this.mockMvc.perform(
            MockMvcRequestBuilders.get("/welcome")
                .header("Authorization", "Bearer " + this.applicationProperties.getAuthorization())
                .contentType(MediaType.APPLICATION_JSON)
        ).andExpect(
            MockMvcResultMatchers.status().isOk()
        ).andDo(
            MockMvcResultHandlers.print()
        );
    }

    /**
     *
     */
    @Test
    public void example() {
        System.out.println(this.applicationProperties.getMessage());
    }

}
