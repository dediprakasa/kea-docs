/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// copied from: node_modules/@docusaurus/theme-classic/src/theme/BlogPostPage

import React from 'react'
import Layout from '@theme/Layout'
import BlogPostItem from '@theme/BlogPostItem'
import BlogPostPaginator from '@theme/BlogPostPaginator'
import type { Props } from '@theme/BlogPostPage'
import BlogSidebar from '@theme/BlogSidebar'
import TOC from '@theme/TOC'
import EditThisPage from '@theme/EditThisPage'
import { ThemeClassNames } from '@docusaurus/theme-common'
import { BlogForm } from '../forms/BlogForm'

function BlogPostPage(props: Props): JSX.Element {
    const { content: BlogPostContents, sidebar } = props
    const { frontMatter, metadata } = BlogPostContents
    const { title, description, nextItem, prevItem, editUrl } = metadata
    const { hide_table_of_contents: hideTableOfContents } = frontMatter

    return (
        <Layout
            title={title}
            description={description}
            wrapperClassName={ThemeClassNames.wrapper.blogPages}
            pageClassName={ThemeClassNames.page.blogPostPage}
        >
            {BlogPostContents && (
                <div className="container margin-vert--lg">
                    <div className="row">
                        <div className="col col--3">
                            <BlogSidebar sidebar={sidebar} />
                        </div>
                        <main className="col col--7">
                            <BlogPostItem frontMatter={frontMatter} metadata={metadata} isBlogPostPage>
                                <BlogPostContents />
                            </BlogPostItem>
                            <div>{editUrl && <EditThisPage editUrl={editUrl} />}</div>
                            <BlogForm />
                            {(nextItem || prevItem) && (
                                <div className="margin-vert--xl">
                                    <BlogPostPaginator nextItem={nextItem} prevItem={prevItem} />
                                </div>
                            )}
                        </main>
                        {!hideTableOfContents && BlogPostContents.toc && (
                            <div className="col col--2">
                                <TOC toc={BlogPostContents.toc} />
                            </div>
                        )}
                    </div>
                </div>
            )}
        </Layout>
    )
}

export default BlogPostPage
