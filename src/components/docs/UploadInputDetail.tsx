"use client";

import { UploadFile, UploadPhoto, UploadingStates } from "@/components/figma/Upload";

export const UploadInputDetail = () => {
  return (
    <div className="mt-6 space-y-10">
      {/* ── Preview ─────────────────────────────────────────────── */}
      <div>
        <h3
          id="detail-preview"
          className="scroll-mt-20 text-lg font-semibold text-foreground"
        >
          Preview
        </h3>
        <div className="mt-4 space-y-6">
          <UploadFile state="default" className="max-w-md" />
          <UploadingStates
            state="uploading"
            progress={40}
            className="max-w-md"
          />
        </div>
      </div>

      {/* ── Upload File States ──────────────────────────────────── */}
      <div>
        <h3
          id="detail-upload-file-states"
          className="scroll-mt-20 text-lg font-semibold text-foreground"
        >
          Upload File — States
        </h3>
        <div className="mt-4 grid grid-cols-1 gap-6">
          <div>
            <p className="mb-2 text-xs text-muted-foreground font-lexend">Default</p>
            <UploadFile state="default" className="max-w-md" />
          </div>
          <div>
            <p className="mb-2 text-xs text-muted-foreground font-lexend">Hover</p>
            <UploadFile state="hover" className="max-w-md" />
          </div>
          <div>
            <p className="mb-2 text-xs text-muted-foreground font-lexend">Uploaded</p>
            <UploadFile
              state="uploaded"
              fileName="Report_2024.csv"
              className="max-w-md"
            />
          </div>
          <div>
            <p className="mb-2 text-xs text-muted-foreground font-lexend">Error</p>
            <UploadFile
              state="error"
              fileName="Document.pdf"
              errorMessage="This document is not supported, please delete and upload another file."
              className="max-w-md"
            />
          </div>
        </div>
      </div>

      {/* ── Uploading States ────────────────────────────────────── */}
      <div>
        <h3
          id="detail-uploading-states"
          className="scroll-mt-20 text-lg font-semibold text-foreground"
        >
          Uploading States
        </h3>
        <div className="mt-4 grid grid-cols-1 gap-4">
          <div>
            <p className="mb-2 text-xs text-muted-foreground font-lexend">Uploading</p>
            <UploadingStates
              state="uploading"
              progress={40}
              className="max-w-md"
            />
          </div>
          <div>
            <p className="mb-2 text-xs text-muted-foreground font-lexend">Success</p>
            <UploadingStates
              state="success"
              progress={100}
              className="max-w-md"
            />
          </div>
          <div>
            <p className="mb-2 text-xs text-muted-foreground font-lexend">Error</p>
            <UploadingStates state="error" progress={30} className="max-w-md" />
          </div>
        </div>
      </div>

      {/* ── Show Detail Toggle ──────────────────────────────────── */}
      <div>
        <h3
          id="detail-show-detail-toggle"
          className="scroll-mt-20 text-lg font-semibold text-foreground"
        >
          Show Detail — True vs False
        </h3>
        <div className="mt-4 grid grid-cols-1 gap-4">
          <div>
            <p className="mb-2 text-xs text-muted-foreground font-lexend">
              showDetail: true
            </p>
            <UploadingStates
              state="uploading"
              progress={40}
              showDetail={true}
              className="max-w-md"
            />
          </div>
          <div>
            <p className="mb-2 text-xs text-muted-foreground font-lexend">
              showDetail: false
            </p>
            <UploadingStates
              state="uploading"
              progress={40}
              showDetail={false}
              className="max-w-md"
            />
          </div>
        </div>
      </div>

      {/* ── Upload Photo States ─────────────────────────────────── */}
      <div>
        <h3
          id="detail-upload-photo-states"
          className="scroll-mt-20 text-lg font-semibold text-foreground"
        >
          Upload Photo — States
        </h3>
        <div className="mt-4 space-y-6">
          <div>
            <p className="mb-2 text-xs text-muted-foreground font-lexend">Default</p>
            <UploadPhoto
              state="default"
              showUploadButton
              showReUploadButton={false}
            />
          </div>
          <div>
            <p className="mb-2 text-xs text-muted-foreground font-lexend">
              No Image (with re-upload controls)
            </p>
            <UploadPhoto
              state="noImage"
              showUploadButton
              showReUploadButton
              fileName="IMG123654qwerqweq"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
