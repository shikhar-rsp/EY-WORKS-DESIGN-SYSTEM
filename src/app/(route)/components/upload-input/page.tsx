import type { Metadata } from "next";

import { ComponentPreview } from "@/components/sections/interactive/ComponentPreview";
import { CodeBlock } from "@/components/fragments/typography/CodeBlock";
import { BrandPreviewToolbar } from "@/components/sections/interactive/BrandPreviewToolbar";
import { UploadInputDetail } from "@/components/docs/UploadInputDetail";
import { UploadFileDefault } from "@/examples/upload-input/upload-file-default";
import { UploadFileUploaded } from "@/examples/upload-input/upload-file-uploaded";
import { UploadFileError } from "@/examples/upload-input/upload-file-error";
import { UploadingUploading } from "@/examples/upload-input/uploading-uploading";
import { UploadingSuccess } from "@/examples/upload-input/uploading-success";
import { UploadingError } from "@/examples/upload-input/uploading-error";
import { UploadPhotoDefault } from "@/examples/upload-input/upload-photo-default";
import { UploadPhotoNoImage } from "@/examples/upload-input/upload-photo-no-image";

export const metadata: Metadata = {
  title: "Upload Input | Design System",
  description:
    "File and photo upload components with drag-and-drop, progress tracking, and multiple states.",
};

const INSTALL_CODE = `cp src/components/figma/Upload.tsx your-project/components/Upload.tsx`;

const USAGE_IMPORT = `import { UploadFile } from "@/components/figma/Upload"
import { UploadingStates } from "@/components/figma/Upload"
import { UploadPhoto } from "@/components/figma/Upload"`;

const USAGE_CODE = `{/* File upload dropzone — default state */}
<UploadFile
  state="default"
  headerText="Import Child Profile"
  subtext="Acceptable file type: CSV. Max Size: 5MB"
  onFileSelect={() => console.log("file selected")}
/>

{/* File upload — uploaded state */}
<UploadFile state="uploaded" fileName="Report_2024.csv" onDelete={() => {}} />

{/* File upload — error state */}
<UploadFile
  state="error"
  fileName="Document.pdf"
  errorMessage="This document is not supported, please delete and upload another file."
/>

{/* Uploading progress — uploading */}
<UploadingStates state="uploading" fileName="Upload_File.pdf" fileSize="60 KB of 18MB" progress={40} />

{/* Uploading progress — success */}
<UploadingStates state="success" fileName="Upload_File.pdf" progress={100} />

{/* Uploading progress — error */}
<UploadingStates
  state="error"
  fileName="Upload_File.pdf"
  progress={30}
  errorMessage="This document is not supported, please delete and upload another file."
/>

{/* Photo upload — default */}
<UploadPhoto state="default" title="Child's Photo" optionalText="(Optional)" onUpload={() => {}} />

{/* Photo upload — no image with controls */}
<UploadPhoto
  state="noImage"
  showReUploadButton
  fileName="IMG123654.jpg"
  onUpload={() => {}}
  onDelete={() => {}}
/>`;

const UploadInputDocsPage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      {/* ── Title & Description ─────────────────────────────────── */}
      <div className="mb-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Upload Input
        </h1>
      </div>
      <p className="leading-7 text-secondary-foreground">
        A family of file and photo upload components. Includes a drag-and-drop
        file dropzone (UploadFile), a progress tracker for in-flight uploads
        (UploadingStates), and a photo uploader with image preview
        (UploadPhoto). Each component supports multiple states: default,
        uploaded/success, and error.
      </p>

      <BrandPreviewToolbar />

      {/* ── Examples ────────────────────────────────────────────── */}
      <h2
        id="examples"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Examples
      </h2>

      <h3
        id="upload-file-default"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Upload File — Default
      </h3>
      <div className="mt-3">
        <ComponentPreview name="upload-input/upload-file-default">
          <UploadFileDefault />
        </ComponentPreview>
      </div>

      <h3
        id="upload-file-uploaded"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Upload File — Uploaded
      </h3>
      <div className="mt-3">
        <ComponentPreview name="upload-input/upload-file-uploaded">
          <UploadFileUploaded />
        </ComponentPreview>
      </div>

      <h3
        id="upload-file-error"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Upload File — Error
      </h3>
      <div className="mt-3">
        <ComponentPreview name="upload-input/upload-file-error">
          <UploadFileError />
        </ComponentPreview>
      </div>

      <h3
        id="uploading-uploading"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Uploading States — Uploading
      </h3>
      <div className="mt-3">
        <ComponentPreview name="upload-input/uploading-uploading">
          <UploadingUploading />
        </ComponentPreview>
      </div>

      <h3
        id="uploading-success"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Uploading States — Success
      </h3>
      <div className="mt-3">
        <ComponentPreview name="upload-input/uploading-success">
          <UploadingSuccess />
        </ComponentPreview>
      </div>

      <h3
        id="uploading-error"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Uploading States — Error
      </h3>
      <div className="mt-3">
        <ComponentPreview name="upload-input/uploading-error">
          <UploadingError />
        </ComponentPreview>
      </div>

      <h3
        id="upload-photo-default"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Upload Photo — Default
      </h3>
      <div className="mt-3">
        <ComponentPreview name="upload-input/upload-photo-default">
          <UploadPhotoDefault />
        </ComponentPreview>
      </div>

      <h3
        id="upload-photo-no-image"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Upload Photo — No Image
      </h3>
      <div className="mt-3">
        <ComponentPreview name="upload-input/upload-photo-no-image">
          <UploadPhotoNoImage />
        </ComponentPreview>
      </div>

      {/* ── Detail ──────────────────────────────────────────────── */}
      <h2
        id="detail"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Detail
      </h2>
      <UploadInputDetail />

      {/* ── Installation ────────────────────────────────────────── */}
      <h2
        id="installation"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Installation
      </h2>
      <div className="mt-4">
        <CodeBlock code={INSTALL_CODE} />
      </div>

      {/* ── Usage ───────────────────────────────────────────────── */}
      <h2
        id="usage"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Usage
      </h2>
      <div className="mt-4 space-y-3">
        <CodeBlock code={USAGE_IMPORT} />
        <CodeBlock code={USAGE_CODE} />
      </div>

      {/* ── API Reference ───────────────────────────────────────── */}
      <h2
        id="api-reference"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        API Reference
      </h2>

      <h3
        id="upload-file-props"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        UploadFile
      </h3>
      <div className="mt-4 overflow-hidden rounded-medium border border-border">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-4 py-3 font-semibold text-foreground">Prop</th>
              <th className="px-4 py-3 font-semibold text-foreground">Type</th>
              <th className="px-4 py-3 font-semibold text-foreground">Default</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="px-4 py-3 font-mono text-xs">state</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                &quot;default&quot; | &quot;hover&quot; | &quot;uploaded&quot; |
                &quot;error&quot;
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                &quot;default&quot;
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">headerText</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                string
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                &quot;Import Child Profile&quot;
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">subtext</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                string
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                &quot;Acceptable file type: CSV...&quot;
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">showHeader</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                boolean
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">true</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">showSubtext</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                boolean
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">true</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">showButton</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                boolean
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">true</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">fileName</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                string
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">errorMessage</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                string
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">dropzoneText</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                string
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                &quot;Drag and Drop your file here&quot;
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">dropzoneHint</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                string
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                &quot;(in Docx, PDF, TXT. Max Size: 1MB)&quot;
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">onFileSelect</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                () =&gt; void
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">onDelete</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                () =&gt; void
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">className</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                string
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3
        id="uploading-states-props"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        UploadingStates
      </h3>
      <div className="mt-4 overflow-hidden rounded-medium border border-border">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-4 py-3 font-semibold text-foreground">Prop</th>
              <th className="px-4 py-3 font-semibold text-foreground">Type</th>
              <th className="px-4 py-3 font-semibold text-foreground">Default</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="px-4 py-3 font-mono text-xs">state</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                &quot;uploading&quot; | &quot;success&quot; | &quot;error&quot;
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                &quot;uploading&quot;
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">fileName</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                string
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                &quot;Upload_File.pdf&quot;
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">showDetail</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                boolean
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">true</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">fileSize</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                string
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                &quot;60 KB of 18MB&quot;
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">progress</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                number
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">0</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">errorMessage</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                string
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">onCancel</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                () =&gt; void
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">onDelete</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                () =&gt; void
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">className</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                string
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3
        id="upload-photo-props"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        UploadPhoto
      </h3>
      <div className="mt-4 overflow-hidden rounded-medium border border-border">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-4 py-3 font-semibold text-foreground">Prop</th>
              <th className="px-4 py-3 font-semibold text-foreground">Type</th>
              <th className="px-4 py-3 font-semibold text-foreground">Default</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="px-4 py-3 font-mono text-xs">state</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                &quot;default&quot; | &quot;uploaded&quot; | &quot;noImage&quot;
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                &quot;default&quot;
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">title</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                string
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                &quot;Childs Photo&quot;
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">optionalText</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                string
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                &quot;(Optional)&quot;
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">subtitle</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                string
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                &quot;JPG or PNG. Max Size: 5MB&quot;
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">showUploadButton</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                boolean
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">true</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">
                showReUploadButton
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                boolean
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">fileName</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                string
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">imageSrc</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                string
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">onUpload</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                () =&gt; void
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">onDelete</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                () =&gt; void
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">className</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                string
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ── Variant Reference ───────────────────────────────────── */}
      <h2
        id="variant-reference"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Variant Reference
      </h2>
      <div className="mt-4 overflow-hidden rounded-medium border border-border">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-4 py-3 font-semibold text-foreground">
                Component
              </th>
              <th className="px-4 py-3 font-semibold text-foreground">State</th>
              <th className="px-4 py-3 font-semibold text-foreground">Use Case</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="px-4 py-3 font-mono text-xs">UploadFile</td>
              <td className="px-4 py-3 font-mono text-xs">default</td>
              <td className="px-4 py-3 text-xs text-secondary-foreground">
                Initial state — shows dropzone with drag-and-drop
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">UploadFile</td>
              <td className="px-4 py-3 font-mono text-xs">hover</td>
              <td className="px-4 py-3 text-xs text-secondary-foreground">
                User is dragging a file over the dropzone
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">UploadFile</td>
              <td className="px-4 py-3 font-mono text-xs">uploaded</td>
              <td className="px-4 py-3 text-xs text-secondary-foreground">
                File selected — shows filename with delete/upload actions
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">UploadFile</td>
              <td className="px-4 py-3 font-mono text-xs">error</td>
              <td className="px-4 py-3 text-xs text-secondary-foreground">
                Unsupported or failed file — shows error with actions
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">UploadingStates</td>
              <td className="px-4 py-3 font-mono text-xs">uploading</td>
              <td className="px-4 py-3 text-xs text-secondary-foreground">
                File is currently uploading — progress bar with discovery color
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">UploadingStates</td>
              <td className="px-4 py-3 font-mono text-xs">success</td>
              <td className="px-4 py-3 text-xs text-secondary-foreground">
                Upload complete — green progress bar with delete action
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">UploadingStates</td>
              <td className="px-4 py-3 font-mono text-xs">error</td>
              <td className="px-4 py-3 text-xs text-secondary-foreground">
                Upload failed — red progress bar with error message
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">UploadPhoto</td>
              <td className="px-4 py-3 font-mono text-xs">default</td>
              <td className="px-4 py-3 text-xs text-secondary-foreground">
                No photo yet — shows orange placeholder with upload button
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">UploadPhoto</td>
              <td className="px-4 py-3 font-mono text-xs">uploaded</td>
              <td className="px-4 py-3 text-xs text-secondary-foreground">
                Photo selected — shows actual image preview
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">UploadPhoto</td>
              <td className="px-4 py-3 font-mono text-xs">noImage</td>
              <td className="px-4 py-3 text-xs text-secondary-foreground">
                Placeholder with person icon — before any photo is chosen
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UploadInputDocsPage;
