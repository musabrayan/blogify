import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';

function RTE({ name, control, label, defaultValue = "" }) {
    if (!control) {
        console.error('The control prop is required for RTE component');
        return null;
    }

    return (
        <div className="w-full">
            {label && (
                <label className="inline-block mb-1 pl-1">{label}</label>
            )}
            
            <Controller
                name={name || "content"}
                control={control}
                defaultValue={defaultValue}
                render={({ field: { onChange, value } }) => (
                    <Editor
                        apiKey='m9hxq0qvrakdpyyc93i9rb5ifik1dhkwmvo4pvmm45h79szf' 
                        initialValue={defaultValue}
                        init={{
                            height: 500,
                            menubar: true,
                            plugins: [
                                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                'insertdatetime', 'media', 'table', 'help', 'wordcount'
                            ],
                            toolbar: 'undo redo | formatselect | ' +
                                'bold italic backcolor | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                'removeformat | help',
                            content_style: 'body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; font-size: 14px }',
                            skin: 'oxide',
                            content_css: 'default'
                        }}
                        onEditorChange={(content) => {
                            onChange(content);
                        }}
                        value={value}
                    />
                )}
            />
        </div>
    );
}

export default RTE;